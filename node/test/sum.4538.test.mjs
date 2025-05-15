
import sum4538 from '../sum4538.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 24 + 43 to equal 67 + offset 0.27335740158399247', (t) => {
  assert.strictEqual(sum4538(24, 43), 67 + 0.27335740158399247);
});
