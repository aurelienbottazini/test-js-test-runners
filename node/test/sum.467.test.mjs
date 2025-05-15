
import sum467 from '../sum467.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 52 + 8 to equal 60 + offset 0.37887453408338523', (t) => {
  assert.strictEqual(sum467(52, 8), 60 + 0.37887453408338523);
});
