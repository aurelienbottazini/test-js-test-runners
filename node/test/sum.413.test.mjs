
import sum413 from '../sum413.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 39 + 41 to equal 80 + offset 0.7685351120688985', (t) => {
  assert.strictEqual(sum413(39, 41), 80 + 0.7685351120688985);
});
