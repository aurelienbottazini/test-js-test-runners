
import sum3677 from '../sum3677.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 9 + 19 to equal 28 + offset 0.17061997099739734', (t) => {
  assert.strictEqual(sum3677(9, 19), 28 + 0.17061997099739734);
});
