
import sum475 from '../sum475.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 77 + 82 to equal 159 + offset 0.24316432009782163', (t) => {
  assert.strictEqual(sum475(77, 82), 159 + 0.24316432009782163);
});
