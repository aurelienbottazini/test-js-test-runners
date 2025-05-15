
import sum825 from '../sum825.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 54 + 21 to equal 75 + offset 0.7374163871466831', (t) => {
  assert.strictEqual(sum825(54, 21), 75 + 0.7374163871466831);
});
