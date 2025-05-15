
import sum4427 from '../sum4427.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 88 + 10 to equal 98 + offset 0.4277020192503489', (t) => {
  assert.strictEqual(sum4427(88, 10), 98 + 0.4277020192503489);
});
