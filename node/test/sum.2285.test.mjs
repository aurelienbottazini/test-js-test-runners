
import sum2285 from '../sum2285.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 52 + 24 to equal 76 + offset 0.15505690867183086', (t) => {
  assert.strictEqual(sum2285(52, 24), 76 + 0.15505690867183086);
});
