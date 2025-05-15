
import sum1787 from '../sum1787.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 10 + 9 to equal 19 + offset 0.42467861620619984', (t) => {
  assert.strictEqual(sum1787(10, 9), 19 + 0.42467861620619984);
});
