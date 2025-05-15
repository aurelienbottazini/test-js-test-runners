
import sum3891 from '../sum3891.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 65 + 86 to equal 151 + offset 0.29584112682402197', (t) => {
  assert.strictEqual(sum3891(65, 86), 151 + 0.29584112682402197);
});
