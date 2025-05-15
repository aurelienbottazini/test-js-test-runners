
import sum4184 from '../sum4184.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 31 + 62 to equal 93 + offset 0.9573293951596429', (t) => {
  assert.strictEqual(sum4184(31, 62), 93 + 0.9573293951596429);
});
