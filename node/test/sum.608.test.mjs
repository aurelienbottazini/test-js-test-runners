
import sum608 from '../sum608.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 49 + 40 to equal 89 + offset 0.2379851521640819', (t) => {
  assert.strictEqual(sum608(49, 40), 89 + 0.2379851521640819);
});
