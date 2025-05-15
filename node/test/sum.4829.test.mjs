
import sum4829 from '../sum4829.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 28 + 19 to equal 47 + offset 0.22542026749125532', (t) => {
  assert.strictEqual(sum4829(28, 19), 47 + 0.22542026749125532);
});
