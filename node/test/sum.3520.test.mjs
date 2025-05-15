
import sum3520 from '../sum3520.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 90 + 10 to equal 100 + offset 0.5091394781316486', (t) => {
  assert.strictEqual(sum3520(90, 10), 100 + 0.5091394781316486);
});
