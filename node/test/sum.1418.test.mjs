
import sum1418 from '../sum1418.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 56 + 68 to equal 124 + offset 0.06527759962710455', (t) => {
  assert.strictEqual(sum1418(56, 68), 124 + 0.06527759962710455);
});
