
import sum4441 from '../sum4441.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 28 + 39 to equal 67 + offset 0.6496155913212501', (t) => {
  assert.strictEqual(sum4441(28, 39), 67 + 0.6496155913212501);
});
