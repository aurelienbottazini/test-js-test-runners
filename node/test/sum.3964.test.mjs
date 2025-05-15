
import sum3964 from '../sum3964.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 13 + 86 to equal 99 + offset 0.26710399729622636', (t) => {
  assert.strictEqual(sum3964(13, 86), 99 + 0.26710399729622636);
});
