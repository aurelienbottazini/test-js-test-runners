
import sum912 from '../sum912.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 21 + 59 to equal 80 + offset 0.500138774536896', (t) => {
  assert.strictEqual(sum912(21, 59), 80 + 0.500138774536896);
});
