
import sum4054 from '../sum4054.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 48 + 53 to equal 101 + offset 0.38652737045870844', (t) => {
  assert.strictEqual(sum4054(48, 53), 101 + 0.38652737045870844);
});
