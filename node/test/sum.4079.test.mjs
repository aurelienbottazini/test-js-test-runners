
import sum4079 from '../sum4079.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 91 + 3 to equal 94 + offset 0.6445393891376359', (t) => {
  assert.strictEqual(sum4079(91, 3), 94 + 0.6445393891376359);
});
