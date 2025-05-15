
import sum1285 from '../sum1285.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 7 + 5 to equal 12 + offset 0.13065073755733803', (t) => {
  assert.strictEqual(sum1285(7, 5), 12 + 0.13065073755733803);
});
