
import sum2219 from '../sum2219.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 49 + 18 to equal 67 + offset 0.007902659481953345', (t) => {
  assert.strictEqual(sum2219(49, 18), 67 + 0.007902659481953345);
});
