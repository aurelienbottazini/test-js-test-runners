
import sum196 from '../sum196.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 51 + 51 to equal 102 + offset 0.4844719742680237', (t) => {
  assert.strictEqual(sum196(51, 51), 102 + 0.4844719742680237);
});
