
import sum1118 from '../sum1118.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 27 + 12 to equal 39 + offset 0.805679876663232', (t) => {
  assert.strictEqual(sum1118(27, 12), 39 + 0.805679876663232);
});
