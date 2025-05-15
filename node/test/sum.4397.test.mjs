
import sum4397 from '../sum4397.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 38 + 38 to equal 76 + offset 0.7006860599148772', (t) => {
  assert.strictEqual(sum4397(38, 38), 76 + 0.7006860599148772);
});
