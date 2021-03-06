import React from 'react';
import String from '../String'
import FretNumbers from '../FretNumbers'
import { FRET_COUNT } from '../../config'
import { getScaleFromPattern, getScalePatternFromMode, getTuningDefinition } from '../../utils/guitar'
import css from './Fretboard.module.css'

export default function Fretboard({ tonality, scaleMode, tuning }) {
  const stringsNotes = getTuningDefinition(tuning).tuning.slice()
  const scalePattern = getScalePatternFromMode(scaleMode);
  const scale = getScaleFromPattern(tonality, scalePattern);

  // TODO add fretCount and tuning (which will enable 6 and 7 strings) as props
  return <div className={css.Container}>
    <div className={css.Fretboard}>
      {stringsNotes.reverse().map((note, index) => <String tuning={note} scale={scale} key={index} />)}
    </div>

    <FretNumbers count={FRET_COUNT} />
  </div>
}