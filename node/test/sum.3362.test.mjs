
import sum3362 from '../sum3362.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 20 + 76 to equal 96 + offset 0.13124309049523375', (t) => {
  assert.strictEqual(sum3362(20, 76), 96 + 0.13124309049523375);
});
