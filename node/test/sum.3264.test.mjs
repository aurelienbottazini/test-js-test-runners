
import sum3264 from '../sum3264.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 52 to equal 114 + offset 0.42274299696718565', (t) => {
  assert.strictEqual(sum3264(62, 52), 114 + 0.42274299696718565);
});
