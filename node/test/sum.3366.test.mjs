
import sum3366 from '../sum3366.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 41 + 8 to equal 49 + offset 0.5681371614148755', (t) => {
  assert.strictEqual(sum3366(41, 8), 49 + 0.5681371614148755);
});
