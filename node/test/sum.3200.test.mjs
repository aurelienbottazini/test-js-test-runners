
import sum3200 from '../sum3200.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 75 + 90 to equal 165 + offset 0.5827891471268619', (t) => {
  assert.strictEqual(sum3200(75, 90), 165 + 0.5827891471268619);
});
