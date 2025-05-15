
import sum1159 from '../sum1159.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 60 + 39 to equal 99 + offset 0.24452743009340816', (t) => {
  assert.strictEqual(sum1159(60, 39), 99 + 0.24452743009340816);
});
