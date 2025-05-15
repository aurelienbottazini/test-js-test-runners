
import sum524 from '../sum524.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 91 + 99 to equal 190 + offset 0.859825704963473', (t) => {
  assert.strictEqual(sum524(91, 99), 190 + 0.859825704963473);
});
