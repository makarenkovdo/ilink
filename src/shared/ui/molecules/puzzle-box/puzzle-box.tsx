import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { PuzzleElement } from "../../atoms";

// fake data generator
const getItems = (count, offset = 0) =>
  Array.from({ length: count }, (v, k) => k).map((k) => ({
    id: `item-${k + offset}-${new Date().getTime()}`,
    content: `item ${k + offset}`,
  }));

const createItems = (arr) =>
  arr.map((word, idx) => ({
    id: `item-${idx}-${new Date().getTime()}`,
    content: word,
  }));

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};
const grid = 5;

const getItemStyle = (draggableStyle) => ({
  ...draggableStyle,
});
const getListStyle = (isDraggingOver) => ({
  display: "grid",
  width: 450,
  gridTemplateColumns: "repeat(10, 40px)",
  gridTemplateRows: "30px",
  gridAutoFlow: "column",
  gap: "5px",
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  borderBottom: "1px solid black",
});

type TDndTranslationBoxProps = {
  sentence: string;
  handleChange: (userAnswer: string) => void;
};

export const PuzzleBox = ({
  sentence,
  handleChange,
}: TDndTranslationBoxProps) => {
  const arrayOfWords = sentence.toLowerCase().split(" ").sort();
  const initialState = [arrayOfWords];
  const [state, setState] = useState([[], createItems(arrayOfWords)]);
  // const actions: SnapDragActions = preDrag.snapLift();
  // const { moveDown, moveUp, drop } = actions;

  // await delay(moveDown);
  function onDragEnd(result) {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }
    const sInd = +source.droppableId;
    const dInd = +destination.droppableId;

    if (sInd === dInd) {
      const items = reorder(state[sInd], source.index, destination.index);
      const newState = [...state];
      newState[sInd] = items;
      setState(newState);
    } else {
      const result = move(state[sInd], state[dInd], source, destination);
      const newState = [...state];

      newState[sInd] = result[sInd];
      newState[dInd] = result[dInd];
      handleChange(newState[0].map(({ content }) => content).join(" "));
      if (newState[1].length > state[1].length) {
        newState[1] = newState[1].sort((a, b) => (a.id > b.id ? 1 : -1));
        setState(newState);
      } else setState(newState);
    }
  }

  // TODO: (AM) декомпозировать компонент
  return (
    <div>
      <div style={{ display: "grid", gridAutoFlow: "row" }}>
        <DragDropContext onDragEnd={onDragEnd}>
          {state.map((el, ind) => (
            <Droppable key={ind} droppableId={`${ind}`} direction="horizontal">
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  style={getListStyle(snapshot.isDraggingOver)}
                  {...provided.droppableProps}
                >
                  {el.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={getItemStyle(provided.draggableProps.style)}
                        >
                          <PuzzleElement>{item.content}</PuzzleElement>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </DragDropContext>
      </div>
    </div>
  );
};
