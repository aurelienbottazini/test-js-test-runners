
import sum4262 from '../sum4262.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 18 + 75 to equal 93 + offset 0.7373668342395447', (t) => {
  assert.strictEqual(sum4262(18, 75), 93 + 0.7373668342395447);
});
