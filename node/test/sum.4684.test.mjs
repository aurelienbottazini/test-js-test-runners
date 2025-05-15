
import sum4684 from '../sum4684.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 17 + 16 to equal 33 + offset 0.3387493280244287', (t) => {
  assert.strictEqual(sum4684(17, 16), 33 + 0.3387493280244287);
});
