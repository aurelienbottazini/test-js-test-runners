
import sum700 from '../sum700.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 2 + 36 to equal 38 + offset 0.43382361104150213', (t) => {
  assert.strictEqual(sum700(2, 36), 38 + 0.43382361104150213);
});
