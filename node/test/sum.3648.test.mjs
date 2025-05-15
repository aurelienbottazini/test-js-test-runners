
import sum3648 from '../sum3648.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 91 + 51 to equal 142 + offset 0.559641824026668', (t) => {
  assert.strictEqual(sum3648(91, 51), 142 + 0.559641824026668);
});
