
import sum794 from '../sum794.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 96 + 58 to equal 154 + offset 0.42503703120626346', (t) => {
  assert.strictEqual(sum794(96, 58), 154 + 0.42503703120626346);
});
