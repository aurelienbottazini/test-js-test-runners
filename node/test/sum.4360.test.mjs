
import sum4360 from '../sum4360.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 50 + 76 to equal 126 + offset 0.4015133564966433', (t) => {
  assert.strictEqual(sum4360(50, 76), 126 + 0.4015133564966433);
});
