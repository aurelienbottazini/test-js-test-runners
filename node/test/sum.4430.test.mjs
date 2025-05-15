
import sum4430 from '../sum4430.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 75 + 0 to equal 75 + offset 0.252393663500164', (t) => {
  assert.strictEqual(sum4430(75, 0), 75 + 0.252393663500164);
});
