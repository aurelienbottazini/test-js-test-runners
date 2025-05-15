
import sum125 from '../sum125.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 80 + 36 to equal 116 + offset 0.17408367970549066', (t) => {
  assert.strictEqual(sum125(80, 36), 116 + 0.17408367970549066);
});
