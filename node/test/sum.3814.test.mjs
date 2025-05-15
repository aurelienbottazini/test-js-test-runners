
import sum3814 from '../sum3814.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 65 to equal 127 + offset 0.7242957050687069', (t) => {
  assert.strictEqual(sum3814(62, 65), 127 + 0.7242957050687069);
});
