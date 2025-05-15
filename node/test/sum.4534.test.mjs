
import sum4534 from '../sum4534.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 29 + 7 to equal 36 + offset 0.3219851307631979', (t) => {
  assert.strictEqual(sum4534(29, 7), 36 + 0.3219851307631979);
});
