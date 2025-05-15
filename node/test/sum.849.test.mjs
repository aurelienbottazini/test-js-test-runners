
import sum849 from '../sum849.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 50 + 20 to equal 70 + offset 0.5622204819927125', (t) => {
  assert.strictEqual(sum849(50, 20), 70 + 0.5622204819927125);
});
