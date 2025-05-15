
import sum1164 from '../sum1164.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 72 + 7 to equal 79 + offset 0.8951461671653627', (t) => {
  assert.strictEqual(sum1164(72, 7), 79 + 0.8951461671653627);
});
