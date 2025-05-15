
import sum4511 from '../sum4511.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 32 + 30 to equal 62 + offset 0.4412806553551729', (t) => {
  assert.strictEqual(sum4511(32, 30), 62 + 0.4412806553551729);
});
