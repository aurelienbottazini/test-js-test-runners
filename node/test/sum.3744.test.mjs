
import sum3744 from '../sum3744.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 60 + 79 to equal 139 + offset 0.1183365927347314', (t) => {
  assert.strictEqual(sum3744(60, 79), 139 + 0.1183365927347314);
});
