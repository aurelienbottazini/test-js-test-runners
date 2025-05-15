
import sum3768 from '../sum3768.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 16 + 92 to equal 108 + offset 0.8839899468944362', (t) => {
  assert.strictEqual(sum3768(16, 92), 108 + 0.8839899468944362);
});
