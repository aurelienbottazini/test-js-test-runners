
import sum4933 from '../sum4933.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 49 + 96 to equal 145 + offset 0.12378697992334964', (t) => {
  assert.strictEqual(sum4933(49, 96), 145 + 0.12378697992334964);
});
