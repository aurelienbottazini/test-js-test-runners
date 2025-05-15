
import sum3226 from '../sum3226.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 78 + 65 to equal 143 + offset 0.0639150572744529', (t) => {
  assert.strictEqual(sum3226(78, 65), 143 + 0.0639150572744529);
});
