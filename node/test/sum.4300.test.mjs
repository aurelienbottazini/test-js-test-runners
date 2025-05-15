
import sum4300 from '../sum4300.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 76 + 50 to equal 126 + offset 0.019395384224372925', (t) => {
  assert.strictEqual(sum4300(76, 50), 126 + 0.019395384224372925);
});
