
import sum2086 from '../sum2086.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 69 + 95 to equal 164 + offset 0.1334565156761014', (t) => {
  assert.strictEqual(sum2086(69, 95), 164 + 0.1334565156761014);
});
