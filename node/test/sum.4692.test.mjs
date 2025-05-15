
import sum4692 from '../sum4692.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 90 + 93 to equal 183 + offset 0.9464009980940502', (t) => {
  assert.strictEqual(sum4692(90, 93), 183 + 0.9464009980940502);
});
