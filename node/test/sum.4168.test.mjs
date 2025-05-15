
import sum4168 from '../sum4168.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 27 + 38 to equal 65 + offset 0.9067659145345576', (t) => {
  assert.strictEqual(sum4168(27, 38), 65 + 0.9067659145345576);
});
